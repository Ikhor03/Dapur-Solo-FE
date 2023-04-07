import DisclosureAcc from "../components/disclosureAcc";

export default function Account () {
    const { user } = JSON.parse(localStorage.getItem('auth')) 
    return (
        <div className="w-11/12 mx-auto mt-4">
            <div className="bg-white overflow-hidden shadow-lg">
                <div className="text-center p-2 bg-hero-image bg-right-bottom border-b mb-10">
                    <svg aria-hidden="true" role="img" className="h-24 w-24 text-white rounded-full mx-auto" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128Z"></path></svg>
                    <p className="pt-2 text-lg font-semibold text-gray-50">{user.full_name}</p>
                    <p className="text-sm text-gray-100">{user.email}</p>
                </div>

                <DisclosureAcc />

                <div className="mt-10 flex justify-between pb-4">
                    <a href="/home" className="w-full px-4 py-2 pl-8">
                        <p className="text-sm font-medium text-amber-800 hover:text-amber-900 leading-none">
                         &larr; Back to home 
                        </p>
                    </a>
                    <span href="#" className="w-full right-0 py-2 pr-10 ">
                        <p className="text-sm text-right font-medium text-amber-800 hover:text-amber-900 cursor-pointer leading-none">
                         Logout
                        </p>
                    </span>
                </div>
            </div>
        </div>
    )
}