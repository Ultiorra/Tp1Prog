"use client"

import { Button, MenuBar } from "tp-kit/components";
import { ShoppingCart, X } from "@phosphor-icons/react";
import { Popover } from "@headlessui/react";
import { useState } from "react";

export default function Menu() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <MenuBar
      trailing={
        <Popover>
          <Popover.Button
            style={{ right: "-20px", top: "10px", position: "absolute" }}
            onClick={toggleCart}
          >
            {isCartOpen ? <X size={32} /> : <ShoppingCart size={32} />}
            {isCartOpen && (
              <span
                className="absolute -top-5 -right-2 bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs"
                style={{ fontSize: "0.75rem" }}
              >
                0
              </span>
            )}
          </Popover.Button>
          <Popover.Panel>
            {isCartOpen && (
              <div className="p-20 border border-gray-200 bg-white shadow-md rounded-lg" style={{top: '50px', right: '0px', position: 'absolute'}}>
                {/* Contenu du mini-panier */}
                <p>Votre panier est vide.</p>
              </div>
            )}
          </Popover.Panel>
        </Popover>
      }
    />
  );
}
