import { Head } from '@inertiajs/react';
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

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Products',
        href: '/products/create',
    },
];

export default function ProductForm() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Management" />

            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-6">
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
                        <form className="space-y-6">
                            {/* Name */}
                            <div className="space-y-2">
                                <Label htmlFor="name">Product Name</Label>
                                <Input
                                    id="name"
                                    placeholder="Enter product name"
                                />
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                                <Label htmlFor="description">
                                    Description
                                </Label>
                                <Textarea
                                    id="description"
                                    placeholder="Enter product description"
                                    className="min-h-[100px]"
                                />
                            </div>

                            {/* Price */}
                            <div className="space-y-2">
                                <Label htmlFor="price">Price</Label>
                                <Input
                                    id="price"
                                    type="number"
                                    placeholder="Enter product price"
                                />
                            </div>

                            {/* Featured Image */}
                            <div className="space-y-2">
                                <Label htmlFor="image">
                                    Featured Image
                                </Label>
                                <Input id="image" type="file" />
                            </div>
                            

                            {/* Created Date */}
                            <div className="space-y-2">
                                <Label htmlFor="created_date">
                                    Created Date
                                </Label>
                                <Input id="created_date" type="date" />
                            </div>
                        </form>
                    </CardContent>

                    <CardFooter className="flex justify-end gap-3">
                        <Button variant="outline" type="button">
                            Cancel
                        </Button>
                        <Button type="submit">
                            Save Product
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </AppLayout>
    );
}