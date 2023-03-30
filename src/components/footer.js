import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900/50 py-6 h-28 mt-5">
            <div className="container mx-auto  text-center items-center">
                <p className="text-gray-200 text-sm pb-7">
                    Logo, gambar, dan konten dalam website ini kurang lebih adalah jiplakan dari website resmi <a href="https://dapursolo.com/" className="text-amber-500">Dapur Solo</a>.
                    Website ini dibuat hanya untuk pembelajaran.
                </p>
                <p className="text-gray-200 text-sm">
                    © 2023 All Rights Reserved. Ikhor.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
