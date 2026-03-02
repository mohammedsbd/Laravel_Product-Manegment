import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manage Products',
        href: '/products',
    },
];

export default function Index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <table className="w-full table-auto border-separate border-spacing-x-6 border-spacing-y-3">
                    <thead>
                        <tr className='bg-black text-white'>
                            <th className='p-4'>#</th>
                            <th className='p-4'>Name</th>
                            <th className='p-4'>Description</th>
                            <th className='p-4'>Price</th>
                            <th className='p-4'>Featured Image</th>
                            <th className='p-4'>Created Date</th>
                            <th className='p-4'>Action</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </AppLayout>
    );
}
