import * as React from "react";

import { Label, LabelProps } from "./label";

import { cn } from "@/lib/utils";

export type TextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    error?: boolean;
    label?: string;
    name?: LabelProps["htmlFor"];
    statusMessage?: string;
  };

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, label, name, statusMessage, ...props }, ref) => {
    const inputID = Boolean(label) && Boolean(name) ? { id: name } : undefined;

    return (
      <div className={cn("flex flex-col gap-2", className)}>
        {Boolean(label) ? <Label htmlFor={name}>{label}</Label> : undefined}
        <textarea
          className={cn(
            `flex h-20 w-full rounded-md border border-input bg-transparent
            px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
            focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`
          )}
          name={name}
          ref={ref}
          {...inputID}
          {...props}
        />
        {statusMessage ? (
          <span
            className={cn(
              "mt-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              error && "text-red-500"
            )}
          >
            {statusMessage}
          </span>
        ) : null}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
