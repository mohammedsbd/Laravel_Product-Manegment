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
               
            </div>
        </AppLayout>
    );
}
