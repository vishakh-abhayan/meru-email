import Link from "next/link";
import { Input } from "@/components/ui/input";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function Dashboard() {
  return (
    <div className="flex h-screen w-full flex-col ">
      <header className="flex h-14 items-center border-b bg-gray-100 px-4 dark:border-gray-800 dark:bg-gray-950 justify-between">
        <div className="flex items-center gap-4">
          <Link className="flex items-center gap-2" href="#">
            <MountainIcon className="h-6 w-6" />
            <span className="font-medium">Meru</span>
          </Link>
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
            <Input
              className="w-full rounded-md bg-white px-9 py-2 text-sm shadow-sm focus:outline-none dark:bg-gray-900 dark:text-gray-50"
              placeholder="Search emails..."
              type="search"
            />
          </div>
        </div>
        <div>
          <Avatar>
            <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <div className="flex flex-1">
        <nav className="hidden h-full w-60 flex-col border-r bg-gray-100 p-4 dark:border-gray-800 dark:bg-gray-950 lg:flex">
          <div className="space-y-2">
            <Link
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              href="#"
            >
              <InboxIcon className="h-4 w-4" />
              Inbox
            </Link>
            <Link
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              href="#"
            >
              <SendIcon className="h-4 w-4" />
              Sent
            </Link>
            <Link
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              href="#"
            >
              <FileIcon className="h-4 w-4" />
              Drafts
            </Link>
            <Link
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              href="#"
            >
              <Trash2Icon className="h-4 w-4" />
              Trash
            </Link>
          </div>
        </nav>
        <div className="flex flex-1 flex-col ">
          <div className="flex-1 overflow-auto border-r dark:border-gray-800">
            <div className="divide-y dark:divide-gray-800  flex flex-row">
              <div className="gap-4 py-4">
                <div className="group flex cursor-pointer items-center gap-4 px-4 py-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
                  <Avatar>
                    <AvatarImage alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium">Olivia Davis</h4>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Oct 08, 2023
                      </span>
                    </div>
                    <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      Meeting With Manager
                    </div>
                  </div>
                </div>
                <div className="group flex cursor-pointer items-center gap-4 px-4 py-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
                  <Avatar>
                    <AvatarImage alt="@shadcn" />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium">Jared Palmer</h4>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Oct 07, 2023
                      </span>
                    </div>
                    <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      Meeting Agenda
                    </div>
                  </div>
                </div>
                <div className="group flex cursor-pointer items-center gap-4 px-4 py-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
                  <Avatar>
                    <AvatarImage alt="@shadcn" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium">John Doe</h4>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Oct 06, 2023
                      </span>
                    </div>
                    <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      Project Update
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 p-6">
                <div className="flex items-start gap-4 border-b pb-4 dark:border-gray-800">
                  <Avatar>
                    <AvatarImage alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <div className="font-semibold">Olivia Davis</div>
                    <div className="line-clamp-1 text-xs">
                      Meeting With Manager For Campus Tour
                    </div>
                    <div className="line-clamp-1 text-xs">
                      <span className="font-medium">Reply-To:</span>
                      olivia.davis@vercel.com
                    </div>
                  </div>
                  <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">
                    Oct 08, 2023 9:15 AM
                  </div>
                </div>
                <div className="flex-1 whitespace-pre-wrap p-4 text-sm prose prose-sm prose-p:leading-normal">
                  <p>
                    Hi, let's have a meeting tomorrow to discuss the about the
                    campus tour. Hence all the student council memebers are
                    requested to meet the Manager for a meeting at 4pm sharp in
                    the premises of the Autitorium.
                  </p>
                  <p>
                    Please come prepared with any questions or insights you may
                    have. Looking forward to our meeting!
                  </p>
                  <p>
                    Best,
                    <br />
                    Olivia
                  </p>
                </div>
                <div className="mt-6 flex gap-2">
                  <Button variant="outline">Reply</Button>
                  <Button variant="outline">Forward</Button>
                  <Button className="ml-auto" variant="outline">
                    Delete
                  </Button>
                </div>
              </div>
              <div className="flex-1 p-6">
                <div className="grid gap-6">
                  <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b pb-4 dark:border-gray-800">
                    <Avatar>
                      <AvatarImage
                        alt="@shadcn"
                        src="/placeholder-avatar.jpg"
                      />
                      <AvatarFallback>JP</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                      <Input
                        className="bg-transparent border-none focus:ring-0 focus:outline-none"
                        placeholder="To"
                        type="email"
                      />
                      <Input
                        className="bg-transparent border-none focus:ring-0 focus:outline-none"
                        placeholder="Subject"
                        type="text"
                      />
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Oct 08, 2023 9:15 AM
                    </div>
                  </div>
                  <Textarea
                    className="flex-1 resize-none bg-transparent border-none focus:ring-0 focus:outline-none"
                    placeholder="Compose your email here..."
                  />
                </div>
                <div className="mt-6 flex gap-2">
                  <Button variant="outline">Discard</Button>
                  <Button variant="outline">Save Draft</Button>
                  <Button className="ml-auto" variant="outline">
                    Send
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t px-4 py-3 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                3 of 50 emails
              </div>
              <div className="flex items-center gap-2">
                <Button size="icon" variant="ghost">
                  <ChevronLeftIcon className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost">
                  <ChevronRightIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function FileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

function InboxIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function Trash2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" x2="10" y1="11" y2="17" />
      <line x1="14" x2="14" y1="11" y2="17" />
    </svg>
  );
}
