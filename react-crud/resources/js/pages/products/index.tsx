import { Head, Link, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { useState, useEffect } from 'react';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manage Products',
        href: '/products',
    },
];

export default function Index({products}: {products: []}) {
    console.log(products);

    const { flash } = usePage<{
        flash?: { success?: string; error?: string };
    }>().props;

    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (flash?.success || flash?.error) setShowAlert(true);
    }, [flash?.success, flash?.error]);

    useEffect(() => {
        if (!flash?.success || !showAlert) return;

        const timer = setTimeout(() => {
            setShowAlert(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, [flash?.success, showAlert]);

    const alertTitle = flash?.success ? 'Success' : 'Error';
    const alertMessage = flash?.success ?? flash?.error;
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {showAlert && alertMessage && (
                    <Alert
                        variant={'default'}
                        className={`mb-4 w-full text-white ${flash?.success ? 'bg-green-500' : 'bg-red-500'}`}
                    >
                        <AlertTitle>{alertTitle}</AlertTitle>
                        <AlertDescription>{alertMessage}</AlertDescription>
                    </Alert>
                )}

                <Link
                    className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                    as="button"
                    href={'products/create'}
                >
                    Add Product
                </Link>
                <div className="overflow-hidden rounded-lg border">
                    <table className="w-full table-auto border-separate border-spacing-x-6 border-spacing-y-3">
                        <thead>
                            <tr>
                                <th className="p-4">#</th>
                                <th className="p-4">Name</th>
                                <th className="p-4">Description</th>
                                <th className="p-4">Price</th>
                                <th className="p-4">Featured Image</th>
                                <th className="p-4">Created Date</th>
                                <th className="p-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product: any) => (
                                <tr>
                                    <td className="border p-4 px-4 py-2 text-center">
                                        1
                                    </td>
                                    <td className="border p-4 px-4 py-2 text-center">
                                        Product 1
                                    </td>
                                    <td className="border p-4 px-4 py-2 text-center">
                                        product 2
                                    </td>
                                    <td className="border p-4 px-4 py-2 text-center">
                                        $100
                                    </td>
                                    <td className="border p-4 px-4 py-2 text-center">
                                        image.jpg
                                    </td>
                                    <td className="border p-4 px-4 py-2 text-center">
                                        2024-06-01
                                    </td>
                                    <td className="border p-4 px-4 py-2 text-center">
                                        image.jpg
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
