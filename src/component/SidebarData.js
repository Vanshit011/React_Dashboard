// Filename - components/SidebarData.js

import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
// import * as RiIcons from "react-icons/ri";
// import * as MdIcons from "react-icons/md";
import { RiLogoutCircleRFill } from "react-icons/ri";


// Sidebar Data

export const SidebarData = [
	{
		title: "hello world",
		path: "/one",
		icon: <AiIcons.AiFillHome />,

	},
	{
		title: "key up print",
		path: "/two",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "show hide",
		path: "/three",
		icon: <FaIcons.FaPhone />,
	},
	{
		title: "price * qty",
		path: "/four",
		icon: <FaIcons.FaEnvelopeOpenText />,
	},
	{
		title: "Increment Decrement",
		path: "/five",
		icon: <IoIcons.IoMdHelpCircle />,
	},
	{
		title: "Movie TMDB",
		path: "/six",
		icon: <IoIcons.IoMdHelpCircle />,
	},
	{
		title: "Clone Increment",
		path: "/seven",
		icon: <IoIcons.IoMdHelpCircle />,
	},
	{
		title: "Logout",
		path: "/login",
		icon: <RiLogoutCircleRFill />,
	}
];


{/* <Link to='/1'><ImAccessibility /> Hello World</Link>
<hr />
<Link to='/2'><ImBug />Key Up Print</Link>

<hr />
<li><ImBullhorn /> toggle P Tag</li><hr />
<li><ImEvil /> Price X Qty</li><hr />
<li><ImFacebook2 /> Celsius To Fahrenheit</li><hr />
<li><ImKey /> Second To Minute</li><hr />
<li><ImReddit /> Toggle Conveter</li><hr />
<li><ImWordpress /> RGB Color Choose</li><hr />
<li><ImWink /> Clone Html</li><hr />
<li><ImSteam /> Counter div</li><hr />
<li><ImKey /> Counter div Clone</li><hr />
<li><ImPieChart /> The Movie Db Data</li><hr /> */}