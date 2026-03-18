                <td className="border p-4 px-4 py-2 text-center">
                                    1
                                </td>
                                <td className="border p-4 px-4 py-2 text-center">
                                    Product 1
                                </td>
                                <td className="border p-4 px-4 py-2 text-center">
                                    product 2
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                            <tr>
                                <td className="border p-4 px-4 py-2 text-center">
                                    1
                                </td>
                                <td className="border p-4 px-4 py-2 text-center">
                                    Product 1
                                </td>
                                <td className="border p-4 px-4 py-2 text-center">
}
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
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
                            </tr >
                        </tbody >
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
import { Head, Link, usePage } from '@inertiajs/react';
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    2024-06-01
                                </td >
    <td className="border p-4 px-4 py-2 text-center">
    </td>
                            </tr >
                        </tbody >
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    2024-06-01
                                </td >
    <td className="border p-4 px-4 py-2 text-center">
    </td>
                            </tr >
                        </tbody >
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    2024-06-01
                                </td >
    <td className="border p-4 px-4 py-2 text-center">
    </td>
                            </tr >
                        </tbody >
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    2024-06-01
                                </td >
    <td className="border p-4 px-4 py-2 text-center">
    </td>
                            </tr >
                        </tbody >
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    2024-06-01
                                </td >
    <td className="border p-4 px-4 py-2 text-center">
    </td>
                            </tr >
                        </tbody >
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    2024-06-01
                                </td >
    <td className="border p-4 px-4 py-2 text-center">
    </td>
                            </tr >
                        </tbody >
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    2024-06-01
                                </td >
    <td className="border p-4 px-4 py-2 text-center">
    </td>
                            </tr >
                        </tbody >
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    2024-06-01
                                </td >
    <td className="border p-4 px-4 py-2 text-center">
    </td>
                            </tr >
                        </tbody >
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    2024-06-01
                                </td >
    <td className="border p-4 px-4 py-2 text-center">
    </td>
                            </tr >
                        </tbody >
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    2024-06-01
                                </td >
    <td className="border p-4 px-4 py-2 text-center">
    </td>
                            </tr >
                        </tbody >
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    2024-06-01
                                </td >
    <td className="border p-4 px-4 py-2 text-center">
    </td>
                            </tr >
                        </tbody >
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    2024-06-01
                                </td >
    <td className="border p-4 px-4 py-2 text-center">
    </td>
                            </tr >
                        </tbody >
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    2024-06-01
                                </td >
    <td className="border p-4 px-4 py-2 text-center">
    </td>
                            </tr >
                        </tbody >
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    2024-06-01
                                </td >
    <td className="border p-4 px-4 py-2 text-center">
    </td>
                            </tr >
                        </tbody >
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    2024-06-01
                                </td >
    <td className="border p-4 px-4 py-2 text-center">
    </td>
                            </tr >
                        </tbody >
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    2024-06-01
                                </td >
    <td className="border p-4 px-4 py-2 text-center">
    </td>
                            </tr >
                        </tbody >
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    2024-06-01
                                </td >
    <td className="border p-4 px-4 py-2 text-center">
    </td>
                            </tr >
                        </tbody >
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    2024-06-01
                                </td >
    <td className="border p-4 px-4 py-2 text-center">
    </td>
                            </tr >
                        </tbody >
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    2024-06-01
                                </td >
    <td className="border p-4 px-4 py-2 text-center">
    </td>
                            </tr >
                        </tbody >
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    2024-06-01
                                </td >
    <td className="border p-4 px-4 py-2 text-center">
        image.jpg
    </td>
                            </tr >
                        </tbody >
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}
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

    console.log(usePage);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Product Manegment" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" as='button' href={'products/create'}>
                    Add Product
                </Link>
                <div className='overflow-hidden rounded-lg border'>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
                    </table >
                </div >
            </div >
        </AppLayout >
    );
}