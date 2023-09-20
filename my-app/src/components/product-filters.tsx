import {ProductsCategoryData,ProductData} from "tp-kit/types";
import {useForm, Checkbox, Group } from '@mantine/core';
import { TextInput } from '@mantine/core';
import { Button} from "tp-kit/components";
import { MagnifyingGlass } from '@phosphor-icons/react';
export default function product_filters(categories : ProductsCategoryData[], onChange : Function){
    const form = useForm({
        initialValues: {
            search: '',
            category: '',

    }, 
    validationRules: {
    }
    });
    let icon =  <MagnifyingGlass />
    return (
        <main>
             <form onSubmit={form.onSubmit((values : any) => onChange(values))}>
                <TextInput
                    label="Recherche"
                    description="Recherche"
                    placeholder="Recherchez un produit"
                    leftSectionPointerEvents="none"
                    leftSection={icon}
                
                />
                <Checkbox.Group
                    defaultValue={['react']}
                    label="Choisir une catégorie"
                    description="Choisir une catégorie"
                    withAsterisk
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
                            variant="primary"
                        >
                        Ajouter au panier
                    </Button>
            </form>
        

        </main>
    )
}