import { PointProvider, usePointContext } from "../../contexts/PointContext";
import { useEffect, useState } from "react";
import PointWrapper from "./PointWrapper";
import TripleDotMenu from "../TripleDotMenu";
import Image from "next/image";

export default function Comment({ level }: { level: number }) {
	const { point, refreshChildren, children } = usePointContext();

	useEffect(() => {
		refreshChildren();
	}, [refreshChildren]);

	return (
		<div className="relative flex flex-col gap-2 border-b">
			<div className="flex flex-row gap-4  rounded-lg px-2 py-2 sm:px-3 sm:py-3 md:px-5 md:py-3">
				<div className="relative h-8 w-8">
					<p className="text-transparent">{point.author?.pfp_url}</p>
					<Image
						src={point.author?.pfp_url || "/default-avatar.svg"}
						fill
						alt={`${point.author?.username}'s pfp`}
						className="rounded-full object-fill"
					/>
				</div>
				<div className="flex flex-1 flex-col">
					<p className="">{point.author?.display_name}</p>
					<div className="w-full text-ellipsis ">{point.title}</div>
				</div>
				<TripleDotMenu />
			</div>
			<div className="flex flex-col gap-2">
				{children.comment?.map((el, i) => (
					<PointWrapper
						key={el.title}
						level={level}
						point={el}
						setHistoricalItems={() => {}}
						getParentAncestry={() => ""}
						refreshParentThread={() => Promise.resolve()}
					/>
				))}
			</div>
		</div>
	);
}
