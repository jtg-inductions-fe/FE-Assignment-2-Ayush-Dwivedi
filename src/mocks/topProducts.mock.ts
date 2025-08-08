export type ProductType = {
    title: string;
    id: string;
    techStack: string;
    sales: number;
};

export const topProducts: ProductType[] = [
    {
        title: 'Restaurant Booking App',
        id: 'restaurant-booking-app',
        techStack: 'React and Bootstrap',
        sales: 70,
    },
    {
        title: 'Online Learning Platform',
        id: 'online-learning-platform',
        techStack: 'Next.js and Tailwind CSS',
        sales: 120,
    },
    {
        title: 'Crypto Wallet Tracker',
        id: 'crypto-wallet-tracker',
        techStack: 'Vue and Firebase',
        sales: 90,
    },
    {
        title: 'Fitness Goal Tracker',
        id: 'fitness-goal-tracker',
        techStack: 'React Native and Redux',
        sales: 85,
    },
    {
        title: 'E-commerce Admin Panel',
        id: 'ecommerce-admin-panel',
        techStack: 'Angular and NgRx',
        sales: 110,
    },
    {
        title: 'Job Listing Portal',
        id: 'job-listing-portal',
        techStack: 'Django and PostgreSQL',
        sales: 75,
    },
];
