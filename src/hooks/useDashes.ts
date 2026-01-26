import { useQuery } from "@tanstack/react-query";
import { dashApi } from "../api/dashApi";

export const useQueryCurrentDashes = (userId: number) => {
	return useQuery({
    queryKey: ['currentDashes'],
    queryFn: () => {
			// debugger;
			return dashApi.getCurrentDashes(userId)
		},    
  });
};

export const useQueryOpenDashes = (userId: number) => {
	return useQuery({
    queryKey: ['openDashes'],
    queryFn: () => {
			return dashApi.getOpenDashes(userId)
		},
  });
};

export default {
	useQueryCurrentDashes,
	useQueryOpenDashes
};