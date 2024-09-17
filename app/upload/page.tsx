"use client";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import React, { useState } from "react";

interface CloudinaryResult {
	public_id: string;
}

const UploadPage = () => {
	const [publicID, setPublicId] = useState("");
	return (
		<>
			{publicID && (
				<CldImage src={publicID} width={200} height={200} alt="An image" />
			)}
			<CldUploadWidget
				uploadPreset="cizmjrst"
				onSuccess={(result, widget) => {
					if (result.event !== "success") return;
					const info = result.info as CloudinaryResult;
					setPublicId(info.public_id);
				}}
			>
				{({ open }) => (
					<button className="btn btn-primary" onClick={() => open()}>
						Upload
					</button>
				)}
			</CldUploadWidget>
		</>
	);
};

export default UploadPage;
