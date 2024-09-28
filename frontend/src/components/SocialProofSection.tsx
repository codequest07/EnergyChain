import MemoMarvelLogo from "@/icons/Marvellogo";
import MemoNetflixLogo from "@/icons/Netflixlogo";
import MemoRedditlogo from "@/icons/Redditlogo";
import MemoSlacklogo from "@/icons/Slacklogo";
import MemoSpotifylogo from "@/icons/Spotifylogo";
import MemoStripelogo from "@/icons/stripelogo";

export default function SocialProofSection() {
  return (
    <div className="py-16 bg-white">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Empowering Energy Sharing Community
        </h2>
      </div>

      {/* Logos Section */}
      <div className="grid grid-cols-2 sm:grid-cols-6 max-w-[70rem] mx-auto sm:space-x-4">
        <MemoRedditlogo className="w-auto h-44" />
        <MemoNetflixLogo className="w-auto h-44" />
        <MemoSlacklogo className="w-auto h-44" />
        <MemoMarvelLogo className="w-auto h-44" />
        <MemoSpotifylogo className="w-auto h-44" />
        <MemoStripelogo className="w-auto h-44" />
      </div>
    </div>
  );
}
