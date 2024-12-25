import React from 'react'
import { twMerge } from './../../node_modules/tailwind-merge/src/lib/tw-merge';
import clsx from 'clsx';
function cn(...imput) {
  return twMerge(clsx(...imput))
}
export default cn