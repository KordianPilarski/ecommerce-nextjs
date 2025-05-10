import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//convert prisma obj into js object
export function convertToPlainObject<T>(val: T): T {
  return JSON.parse(JSON.stringify(val));
}
