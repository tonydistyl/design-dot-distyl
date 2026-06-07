"use client";

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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Body content sits between DialogHeader and DialogFooter, wrapped in px-4 pb-4
// — the header and footer own their padding so the footer can be full-bleed.

export function ShareLinkDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Share link</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="px-4 pb-4">
          <Input readOnly defaultValue="https://www.distyl.ai/share/abc123" />
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function FormDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit profile</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 px-4 pb-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="dialog-name"
              className="text-sm font-medium text-text-default"
            >
              Name
            </label>
            <Input id="dialog-name" defaultValue="Tony Yates" />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="dialog-username"
              className="text-sm font-medium text-text-default"
            >
              Username
            </label>
            <Input id="dialog-username" defaultValue="@tony" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button>Save changes</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function TextDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Read terms</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Terms of service</DialogTitle>
          <DialogDescription>
            Please review the terms before continuing.
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[50vh] space-y-4 overflow-y-auto px-4 pb-4 text-sm text-text-default">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            interdum hendrerit ex vitae sodales. Donec id leo ipsum. Phasellus
            volutpat aliquet mauris, et blandit nulla laoreet vitae.
          </p>
          <p>
            Quisque ante dui, porta eu felis nec, scelerisque pharetra turpis.
            Phasellus volutpat aliquet mauris, et blandit nulla laoreet vitae.
            Donec id leo ipsum.
          </p>
          <p>
            Vivamus interdum hendrerit ex vitae sodales. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Quisque ante dui, porta eu felis.
          </p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
