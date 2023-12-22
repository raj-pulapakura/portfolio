import { useMediaQuery } from "usehooks-ts";

export const useMediaSmQuery = () => {
  return useMediaQuery("(min-width: 640px)");
};

export const useMediaMdQuery = () => {
  return useMediaQuery("(min-width: 768px)");
};

export const useMediaLgQuery = () => {
  return useMediaQuery("(min-width: 1024px)");
};

export const useMediaXlQuery = () => {
  return useMediaQuery("(min-width: 1280px)");
};

export const useMedia2xlQuery = () => {
  return useMediaQuery("(min-width: 1536px)");
};
