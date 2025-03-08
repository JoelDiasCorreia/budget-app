"use client";

import { CategoryView } from "@/app/components/category/CategoryView";
import { Header } from "@/app/components/atomic/Header";
import { SnackbarProvider } from "notistack";

export default function CategoriesPage() {
  return (
    <>
      <SnackbarProvider />
      <Header></Header>
      <CategoryView></CategoryView>
    </>
  );
}
