import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    CardDescription,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { CloudCog } from 'lucide-react';
import { FormEvent } from "react";
import InputError from '@/components/input-error';  

const breadcrumbs: BreadcrumbItem[] = [

   
    {
        title: 'Create Products',
        href: '/products/create',
    },
];



export default function ProductForm() {




    const {data, setData, post, processing, errors, reset} = useForm({
        name: '',
        description: '',
        price: '',
        featured_image: null as File | null,
      
    })

   

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  post('/products/', {
    onSuccess: () => {
      console.log('Product created successfully');
      reset();
    },
  });
  console.log(data);
};

    return (




        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Management" />

            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6">
                  <Link href="/products" className="text-blue-500 flex items-center gap-2 bg-gray-50 p-2 rounded ">
                           <Button variant="outline">Back to Products</Button>
                        </Link>
                <Card className="max-w-3xl">
                    <CardHeader>
                        <CardTitle className="text-2xl font-semibold">
                            Create Product
                        </CardTitle>

                      
                        {/* <CardDescription>
                            Create a new product
                        </CardDescription> */}
                    </CardHeader>

                    <CardContent>
                        <form  className="space-y-6">
                            {/* Name */}
                            <div className="space-y-2">
                                <Label htmlFor="name">Product Name</Label>
                                <Input
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    id="name"
                                    placeholder="Enter product name"
                                />
                                <InputError message={errors.name} />
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                                <Label htmlFor="description">
                                    Description
                                </Label>
                                <Textarea
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    id="description"
                                    placeholder="Enter product description"
                                    className="min-h-[100px]"
                                />
                                <InputError message={errors.description} />
                            </div>

                            {/* Price */}
                            <div className="space-y-2">
                                <Label htmlFor="price">Price</Label>
                                <Input
                                    value={data.price}
                                    onChange={(e) => setData('price', e.target.value)}
                                    id="price"
                                    type="number"
                                    placeholder="Enter product price"
                                />
                                <InputError message={errors.price} />
                            </div>

                            {/* Featured Image */}
                            <div className="space-y-2">
                                <Label htmlFor="image">
                                    Featured Image
                                </Label>
                                <Input onChange={(e) => setData('featured_image', e.target.files?.[0] || null)} id="featured_image" type="file" />
                                <InputError message={errors.featured_image} />
                            </div>
                            

                            {/* Created Date
                            <div className="space-y-2">
                                <Label htmlFor="created_date">
                                    Created Date
                                </Label>
                                <Input id="created_date" type="date" />
                            </div> */}
                        </form>
                    </CardContent>

                    <CardFooter className="flex justify-end gap-3">
                        <Button variant="outline" type="button">
                            Cancel
                        </Button>
                        <Button onClick={handleSubmit} type="submit">
                            Save Product
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </AppLayout>
    );
}