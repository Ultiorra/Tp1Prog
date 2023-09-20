"use client";
import {ProductsCategoryData,ProductData} from "tp-kit/types";
import {useForm} from "@mantine/form";
import { Checkbox, Group } from '@mantine/core';
import { TextInput } from '@mantine/core';
import { Button} from "tp-kit/components";
import { MagnifyingGlass } from '@phosphor-icons/react';
import {ProductFilterResult} from "../types";
import { useCallback } from "react";
import { type } from "os";
type Props = {categories: ProductsCategoryData[], onChange : (param : ProductFilterResult) => void}
export function ProductFilters( {categories, onChange} : Props ) {

    const form = useForm({
        initialValues: {
            search: '',
            categoriesSlug: [],

    }, 
    });
    let icon =  <MagnifyingGlass />
    const handleSubmit = useCallback((values : any) => {
            onChange(values)
    }, []);
    return (
        <main>
             <form onSubmit={form.onSubmit((values : any) => (console.log("ui")) )}>
                <TextInput
                    label="Recherche"
                    description="Recherche"
                    placeholder="Recherchez un produit"
                    {...form.getInputProps('search')}
                />
                <Checkbox.Group
                    label="Choisir une catégorie"
                    description="Choisir une catégorie"
                    {...form.getInputProps('categoriesSlug', {type: 'checkbox'})}
                    
                    >
                    <Group mt="xs">
                       {
                            categories.map((category : ProductsCategoryData) => {
                                return <Checkbox
                                    key={category.id}
                                    label={category.name}
                                    
                                    value={category.name}
                                />
                            })
                       }
                    </Group>
                </Checkbox.Group>
                <Button
                    variant="ghost"
                    onClick={() => {
                        handleSubmit(form.values)
                    }}
                >
                    Filtrer
                </Button>
            </form>
        

        </main>
    )
}