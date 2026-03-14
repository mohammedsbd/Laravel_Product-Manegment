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
    isView?: boolean;
    isEdit?: boolean;
};

export default function ProductForm({
    product,
    isView,
    isEdit,
}: ProductFormProps) {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: isView
                ? 'View Product'
                : isEdit
                  ? 'Edit Product'
                  : 'Create Products',
            href: isView ? `/products/${product?.id}` : '/products/create',
        },
    ];

    const { data, setData, post, put, processing, errors, reset } =
        useForm<ProductFormData>({
            name: product?.name ?? '',
            description: product?.description ?? '',
            price: product ? String(product.price) : '',
            featured_image: null,
        });

    const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData('featured_image', file);
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isView) return;

        if (isEdit && product) {
            put(`/products/${product.id}`, {
                forceFormData: true,
                onSuccess: () => reset(),
            });
        } else {
            post('/products', {
                forceFormData: true,
                onSuccess: () => reset(),
            });
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Management" />

            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6">
                <Link href="/products">
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
                    </CardHeader>

                    {/* FORM START */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <CardContent className="space-y-6">
                            {/* Name */}
                            <div className="space-y-2">
                                <Label htmlFor="name">Product Name</Label>
                                <Input
                                    id="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                    placeholder="Enter product name"
                                    disabled={isView || processing}
                                />
                                <InputError message={errors.name} />
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                                <Label htmlFor="description">Description</Label>
                                <Textarea
                                    id="description"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData('description', e.target.value)
                                    }
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
                                    id="price"
                                    type="number"
                                    value={data.price}
                                    onChange={(e) =>
                                        setData('price', e.target.value)
                                    }
                                    placeholder="Enter product price"
                                    disabled={isView || processing}
                                />
                                <InputError message={errors.price} />
                            </div>

                            {/* Featured Image */}
                            {!isView ? (
                                <div className="space-y-2">
                                    <Label htmlFor="featured_image">
                                        Featured Image
                                    </Label>
                                    <Input
                                        id="featured_image"
                                        type="file"
                                        onChange={handleFileUpload}
                                    />
                                    <InputError
                                        message={errors.featured_image}
                                    />
                                </div>
                            ) : (
                                <div className="space-y-2">
                                    <Label>Current Featured Image</Label>
                                    {product?.featured_image && (
                                        <img
                                            src={`/storage/${product.featured_image}`}
                                            alt={
                                                product.featured_image_original_name ??
                                                'Product Image'
                                            }
                                            className="h-16 w-16 rounded object-cover"
                                        />
                                    )}
                                </div>
                            )}
                        </CardContent>

                        <CardFooter className="flex justify-end gap-3">
                            <Button variant="outline" type="button">
                                Cancel
                            </Button>

                            {!isView && (
                                <Button disabled={processing} type="submit">
                                    {processing && (
                                        <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                                    )}

                                    {processing
                                        ? isEdit
                                            ? 'Updating...'
                                            : 'Creating...'
                                        : isEdit
                                          ? 'Update Product'
                                          : 'Create Product'}
                                </Button>
                            )}
                        </CardFooter>
                    </form>
                    {/* FORM END */}
                </Card>
            </div>
        </AppLayout>
    );
}
