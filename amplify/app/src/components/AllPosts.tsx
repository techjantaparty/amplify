/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import axios from "axios";
import PostItem from "./PostItem";
import { LoaderIcon } from "react-hot-toast";
import { Report } from "@/app/(protected)/report/[id]/page";

const AllPosts = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  /*async function getNFTitems() {
    const itemsArray = [];
    if (!signer) return;

    const contract = new ethers.Contract(
      marketplace.address,
      marketplace.abi,
      signer
    );

    const transaction = await contract.getAllListedNFTs();

    for (const i of transaction) {
      const tokenId = parseInt(i.tokenId);
      const tokenURI = await contract.tokenURI(tokenId);
      const meta = (await axios.get(tokenURI)).data;

      const item = {
        tokenId: i.tokenId,
        image: meta.image,
        name: meta.name,
        description: meta.description,
      };

      itemsArray.push(item);
    }
    return itemsArray as Post[];
  }*/

  console.log(reports);

  useEffect(() => {
    const fetchReports = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/report");
        setReports(res.data.reports);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchReports();
  }, []);

  /*useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const itemsArray = await getNFTitems();
        setPosts(itemsArray || []);
      } catch (error) {
        console.error("Error fetching NFT items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [isConnected]);*/

  if (loading)
    return (
      <div className="col-span-2 w-full">
        <LoaderIcon className="size-8 text-white" />
      </div>
    );

  return (
    <div className="col-span-2 w-full">
      <div className="flex gap-4 flex-wrap">
        {reports.map((report) => {
          return <PostItem report={report} key={report._id} />;
        })}
      </div>
    </div>
  );
};

export default AllPosts;
