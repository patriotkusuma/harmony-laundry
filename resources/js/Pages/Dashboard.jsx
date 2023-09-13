import AdminLayout from '@/Layouts/AdminLayout';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AdminLayout
            user={auth.user}
        >
            <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">

            </div>
        </AdminLayout>
    );
}
