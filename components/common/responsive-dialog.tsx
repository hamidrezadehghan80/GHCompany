"use client";

import * as React from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import useWindowSize from "@/libs/hooks/use-window-size";

export function ResponsiveDialog({
  trigger,
  children,
  description,
  title,
  footer,
  open,
  setOpen,
  onCloseAutoFocus,
}: {
  trigger?: React.ReactNode;
  children: React.ReactNode;
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  open: boolean;
  setOpen: (value: boolean) => void;
  onCloseAutoFocus?: () => void;
}) {
  const { windowSize } = useWindowSize();
  const isDesktop = (windowSize.width || 0) >= 768;

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent
          onCloseAutoFocus={() => onCloseAutoFocus && onCloseAutoFocus()}
          className="sm:max-w-[425px]"
        >
          <DialogHeader className="text-center">
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description} </DialogDescription>
          </DialogHeader>
          {children}
          <DialogFooter>{footer}</DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen} shouldScaleBackground>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent
        onCloseAutoFocus={() => onCloseAutoFocus && onCloseAutoFocus()}
        className="max-h-[85vh] w-auto"
      >
        <DrawerHeader className="text-center">
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        <div className="overflow-auto px-4 pb-6">{children}</div>
        <DrawerFooter>{footer}</DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
