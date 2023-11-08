import { AiOutlineCheckCircle, AiOutlineCiCircle, AiOutlineCheck } from "react-icons/ai";
import { HiOutlineCheckCircle, HiOutlineXCircle } from "react-icons/hi";
import axios from 'axios';
import { FiCheck, FiHeart, FiLink2, FiXCircle } from "react-icons/fi";
import { useCallback, useEffect, useState } from "react";
import like from "@/lib/like";
import unlike from "@/lib/unlike";
import { Signer } from "neynar-next/server";


export default function NegateLikeButtons({
    id,
    points,
    onNegate,
    type,
    advocates,
    farcasterSigner,
    isLiked,
    setIsLiked,
    setScore
}: {
    id: string;
    points: number;
    onNegate: (e: React.MouseEvent<HTMLSpanElement | React.MouseEvent>) => void;
    type: "relevance" | "veracity";
    advocates: { fid: number }[];
    farcasterSigner: Signer | null;
    isLiked: boolean | null;
    setIsLiked: React.Dispatch<React.SetStateAction<boolean | null>>
    setScore: React.Dispatch<React.SetStateAction<number>>
}) {

    const handleLike = useCallback((e: React.MouseEvent<HTMLSpanElement | React.MouseEvent>) => {
        e.stopPropagation();
        e.preventDefault();

        if (!farcasterSigner) return
        const toggleLike = async () => {
            if (isLiked)
                await unlike(id, farcasterSigner).then(() => { setScore(prev => prev - 1) })
            else
                await like(id, farcasterSigner).then(() => { setScore(prevScore => prevScore + 1) })
            setIsLiked(!isLiked);
        };

        toggleLike();
    }, [farcasterSigner, id, isLiked]);

    return (
        <div className="flex flex-row gap-2">
            <span className={isLiked ? "text-green-500 text-xl" : "text-xl"} onMouseDown={(e) => handleLike(e)}>
                <HiOutlineCheckCircle size={24} />
            </span>
            <span
                className="hover:text-purple-600 text-xl"
                onMouseDown={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    onNegate(e);
                }}
            >
                <HiOutlineXCircle size={24} />
            </span>
        </div>

    );
}

