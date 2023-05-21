import React from 'react'
import classNames from 'classnames'
import Logo from '../../assets/Logo.png'
import { Link, useLocation } from 'react-router-dom'
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/Navigation'
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/consts/Navigation'
import { HiOutlineLogout } from 'react-icons/hi'

const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-[#0F172A] hover:no-underline active:bg-[#0F172A] rounded-sm text-base'

export default function Sidebar() {
  return (
    <div className='bg-[#1E293B] w-60 p-3 flex flex-col text-[#E2E8F0]'>
        <div className='flex items-center gap-2 px-1 py-2'>
            <img src={Logo} alt="Logo" />
        </div>
        
        <div className="py-8 flex flex-1 flex-col gap-0.5">
            <p className='flex flex-col gap-0,5 py-2 text-[#64748B]'>PAGES</p>
				{DASHBOARD_SIDEBAR_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
			</div>
            <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
				{DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
				<div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
					<span className="text-xl">
						<HiOutlineLogout />
					</span>
					Logout
				</div>
			</div>
    </div>
  )
}

function SidebarLink({ link }) {
	const { pathname } = useLocation()

	return (
		<Link
			to={link.path}
			className={classNames(pathname === link.path ? 'bg-[#0F172A] text-white' : 'text-white', linkClass)}
		>
			<span className="text-xl">{link.icon}</span>
			{link.label}
		</Link>
	)
}