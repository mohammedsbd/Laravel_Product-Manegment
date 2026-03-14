import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { FormEvent, ChangeEvent } from 'react';
import InputError from '@/components/input-error';
import { LoaderCircle } from 'lucide-react';



interface ProductFormData {
    name: string;
    description: string;
    price: string;
    featured_image: File | null;
}

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    featured_image: string | null;
    featured_image_original_name: string | null;
    created_at: string;
}

type ProductFormProps = {
    product?: Product;
};

export default function ProductForm({...props  }) {
    const { product, isView,isEdit } = props;
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: isView ? 'View Product' : isEdit ? 'Edit Product' : 'Create Products',
            href: isView ? `/products/${product?.id}` : '/products/create',
        },
    ];
    const { data, setData, post, processing, errors, reset } = useForm<ProductFormData>({
        name: product?.name ?? '',
        description: product?.description ?? '',
        price: product ? String(product.price) : '',
        featured_image: null as File | null,
    });

    const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData('featured_image', file);
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post('/products', {
            forceFormData: true,
            onSuccess: () => {
                reset();
            },
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Management" />

            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6">
                <Link
                    href="/products"
                    className="flex items-center gap-2 rounded bg-gray-50 p-2 text-blue-500"
                >
                    <Button variant="outline">Back to Products</Button>
                </Link>
                <Card className="max-w-3xl">
                    <CardHeader>
                        <CardTitle className="text-2xl font-semibold">
                            {isView
                                ? 'View Product'
                                : isEdit
                                  ? 'Edit Product'
                                  : 'Create Products'}
                        </CardTitle>

                        {/* <CardDescription>
                            Create a new product
                        </CardDescription> */}
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <div className="space-y-2">
                                <Label htmlFor="name">Product Name</Label>
                                <Input
                                    value={data.name}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                    id="name"
                                    placeholder="Enter product name"
                                    disabled={isView || processing}
                                />
                                <InputError message={errors.name} />
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    value={data.description}
                                    onChange={(e) =>
                                        setData('description', e.target.value)
                                    }
                                    id="description"
                                    placeholder="Enter product description"
                                    className="min-h-[100px]"
                                    disabled={isView || processing}
                                />
                                <InputError message={errors.description} />
                            </div>

                            {/* Price */}
                            <div className="space-y-2">
                                <Label htmlFor="price">Price</Label>
                                <Input
                                    value={data.price}
                                    onChange={(e) =>
                                        setData('price', e.target.value)
                                    }
                                    id="price"
                                    type="number"
                                    placeholder="Enter product price"
                                    disabled={isView || processing}
                                />
                                <InputError message={errors.price} />
                            </div>

                            {/* Featured Image */}
                            {!isView ?(
                                <div className="space-y-2">
                                    <Label htmlFor="image">
                                        Featured Image
                                    </Label>
                                    <Input
                                        onChange={handleFileUpload}
                                        id="featured_image"
                                        type="file"
                                    />
                                    <InputError
                                        message={errors.featured_image}
                                    />
                                </div>
                            ) : ( <div className="space-y-2">
                                <Label htmlFor="image">
                                    Current Featured Image
                                </Label>
                                <img src={`/storage/${product?.featured_image}`} alt={product?.featured_image_original_name} className="w-10 h-10 object-cover" />
                            </div> )}


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
                        {!isView && (
                            
                        <Button disabled={processing} type="submit">
                            {processing && <LoaderCircle className="w-4 h-4 animate-spin" />}
                            Save Product
                        </Button>
                        )}
                    </CardFooter>
                </Card>
            </div>
        </AppLayout>
    );
}