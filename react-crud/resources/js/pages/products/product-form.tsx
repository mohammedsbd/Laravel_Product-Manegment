import { Head, Link } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Products',
        href: '/products/create',
    },
];

export default function ProductForm() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
               
                <div className='overflow-hidden rounded-lg border'>
                <form className="w-full max-w-lg p-4">
                    <div className="mb-4">
                        <label className="mb-2 block text-gray-700" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="w-full rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Product Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="mb-2 block text-gray-700" htmlFor="description">
                            Description
                        </label>
                        <textarea   
                            className="w-full rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none focus:shadow-outline"
                            id="description"
                            placeholder="Product Description"
                        />
                    </div>
                    <div className="mb-4">  
                        <label className="mb-2 block text-gray-700" htmlFor="price">
                            Price
                        </label>
                        <input
                            className="w-full rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none focus:shadow-outline"
                            id="price"  
                            type="number"
                            placeholder="Product Price"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="mb-2 block text-gray-700" htmlFor="featured_image">
                            Featured Image
                        </label>
                        <input

                            className="w-full rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none focus:shadow-outline"
                            id="featured_image"
                            type="file"
                            placeholder="Product Featured Image"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Create Product
                        </button>
                    </div>
                </form>
                </div>
            </div>
        </AppLayout>
    );
}
