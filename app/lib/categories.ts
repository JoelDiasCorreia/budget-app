import { CreatableCategory } from "@/app/components/types";

export const createCategory = (category: CreatableCategory) => {
  return fetch("/api/v1/category/:type".replace(":type", category.type), {
    method: "POST",
    body: JSON.stringify(category),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getCategories = (type: string) => {
  return fetch("/api/v1/category/:type".replace(":type", type), {
    method: "GET",
  });
};

export const deleteCategory = (id: string) => {
  return fetch(`/api/v1/category/${id}`, {
    method: "DELETE",
  });
};
