import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";
import Image from "next/image";

const reviews = [
    {
        name: "Ayesha",
        username: "@ayesha",
        body: "LexoraTech's software solutions have truly transformed the way we operate. Their support and innovation are unparalleled. Highly recommend!",
        img: "https://avatar.vercel.sh/ayesha",
    },
    {
        name: "Tharindu",
        username: "@tharindu",
        body: "I am really impressed by the efficiency and reliability of LexoraTech. Their team went above and beyond to meet our needs. Truly professional!",
        img: "https://avatar.vercel.sh/tharindu",
    },
    {
        name: "Saman",
        username: "@saman",
        body: "As a Sri Lankan business, we needed a solution that was tailored to our market. LexoraTech delivered beyond expectations. Amazing service!",
        img: "https://avatar.vercel.sh/saman",
    },
    {
        name: "Kavindi",
        username: "@kavindi",
        body: "I’ve been using LexoraTech’s services for months now, and I can confidently say that their solutions are cutting-edge. They make it easy to stay ahead in the tech world.",
        img: "https://avatar.vercel.sh/kavindi",
    },
    {
        name: "Nishan",
        username: "@nishan",
        body: "LexoraTech’s customer support is exceptional. They really listen to our concerns and provide quick solutions. We couldn't be happier with their services.",
        img: "https://avatar.vercel.sh/nishan",
    },
    {
        name: "Dulani",
        username: "@dulani",
        body: "From day one, LexoraTech’s team showed their dedication to excellence. Their software has helped streamline our business, and we’ve seen remarkable improvements in our workflow.",
        img: "https://avatar.vercel.sh/dulani",
    },
]


const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <Image className="rounded-full" width={32} height={32} src={img} alt={name} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

export function Testimonials() {
    return (
        <div className="mx-auto max-w-screen-2xl px-8">
            <h1 className="text-center text-3xl font-bold">Cusotmer Testimonials</h1><br />
            <p className="text-center text-gray-500">Hear from our valued customers who have experienced the benefits of our services.</p><br />
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                {/* <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee> */}
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
            </div>
        </div>

    );
}
