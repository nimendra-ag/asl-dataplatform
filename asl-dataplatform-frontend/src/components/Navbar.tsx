'use client';

import { useState } from 'react';
import { Menu, Globe, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState('talent/teacher');   //default product is talent/teacher

  return (
    <nav className="p-4 flex items-center justify-between" style={{ backgroundColor: "#0062B2" }}>
      {/* Left: Hamburger Menu with Sheet */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button className="text-white">
            <Menu size={24} className="text-white" />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SheetHeader className="p-4 text-white" style={{ backgroundColor: "#0062B2" }}>
            <SheetTitle className="text-white">Select the Product</SheetTitle>
          </SheetHeader>
          <div className="p-4 flex flex-col gap-4">
            <Button 
              variant="outline" 
              className="flex items-center justify-start gap-2 w-full"
              style={{backgroundColor: "#f85b3c"}}
              onClick={() => {
                setProduct('volunteer');    //change the product state to volunteer
                setOpen(false);
              }}
            >
              <Globe size={18} />
              Global Volunteer
            </Button>
            
            <Button 
              variant="outline" 
              className="flex items-center justify-start gap-2 w-full"
              style={{backgroundColor: "#08b8c5"}}
              onClick={() => {
                setProduct('talent/teacher');    //change the product state to talent/teacher
                setOpen(false);
              }}
            >
              <GraduationCap size={18} />
              Global Talent/ Teacher
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      {/* Title */}
      <h1 className="text-white text-lg font-bold flex-1 text-center md:text-center md:ml-4">
        AIESEC SRI LANKA OPS DASHBOARD
      </h1>

      {/* Right: Menu Options (Hidden in Mobile) */}
      <div className="hidden md:flex space-x-4 text-white">
        {/* Additional menu items can be added here */}
      </div>

      {/* Right: Three Dots Menu */}
      <button className="text-white">
        <span className="text-xl">&#8942;</span>
      </button>
    </nav>
  );
}