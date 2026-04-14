"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Minus, Plus, ShoppingBag } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import Image from "@/lib/img"

export function MiniCart() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, itemCount } = useCart()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-50 shadow-2xl flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-sm tracking-widest uppercase">Your Bag ({itemCount})</h2>
              <button onClick={() => setIsOpen(false)} aria-label="Close cart">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                  <ShoppingBag className="w-12 h-12 mb-4 opacity-30" />
                  <p className="text-sm tracking-widest uppercase">Your bag is empty</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id + item.size} className="flex gap-4">
                      <div className="w-20 h-24 bg-muted relative shrink-0 overflow-hidden">
                        <Image fill src={item.image} alt={item.name} className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{item.name}</p>
                        <p className="text-xs text-muted-foreground mt-1">Size: {item.size}</p>
                        <p className="text-sm mt-1">${item.price.toLocaleString()}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-6 h-6 border flex items-center justify-center hover:bg-muted">
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-6 h-6 border flex items-center justify-center hover:bg-muted">
                            <Plus className="w-3 h-3" />
                          </button>
                          <button onClick={() => removeItem(item.id)} className="text-xs text-muted-foreground underline ml-auto">Remove</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t p-6 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="tracking-widest uppercase">Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <button className="w-full py-4 bg-foreground text-background text-sm tracking-widest uppercase hover:bg-foreground/90 transition-colors">
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
