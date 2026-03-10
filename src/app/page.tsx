"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Home() {
  return (
    <Button variant="secondary" size="lg" onClick={() => toast.success("Hi")}>
      Click me
    </Button>
  );
}
