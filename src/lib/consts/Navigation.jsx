import {
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'
import Products from '../../assets/Icon Products.png'
import Users from '../../assets/Icon Users.png'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'products',
		label: 'Products',
		path: '/products',
		icon: <img src={Products} alt="Products" />
	},
	{
		key: 'users',
		label: 'Users',
		path: '/users',
		icon: <img src={Users} alt="Users" />
	},
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]