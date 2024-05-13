import React from 'react';
import {useQuery} from "react-query";
import {fetchTodos} from "../services/todos";
import {useToast} from "@chakra-ui/react";
import {TodoState} from "../types/data";


const useTodosQuery = (state: TodoState) => {
    const toast = useToast()
    return useQuery({

        queryFn: () => fetchTodos(state),
        queryKey: ['todos', state],
        onError: (err) => {
            if (err instanceof Error){
                toast({
                    status: "error",
                    title: err.message,
                    position: 'top-right'
                })
            }
        }
    })
};

export default useTodosQuery;