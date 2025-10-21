import Companion from "@/components/Companion";
import ROUTES from "@/constants/routes";
import { getCompanion } from "@/lib/actions/companion.action";
import { getSubjectColor } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

const Page = async ({ params }: Props) => {
  const { id } = await params;
  const companion = await getCompanion(id);
  const user = await currentUser();

  if (!user) return redirect(ROUTES.SIGN_IN);
  if (!companion) return redirect(ROUTES.COMPANIONS);

  const { subject, name, topic, duration } = companion;
  return (
    <main className="">
      <article
        className={`
          rounded-border flex justify-between p-6
          max-md:flex-col
        `}
      >
        <div className="flex items-center gap-2">
          <div
            className={`
              flex size-[72px] items-center justify-center rounded-lg
              max-md:hidden
            `}
            style={{ backgroundColor: getSubjectColor(subject) }}
          >
            <Image src={`/icons/${subject}.svg`} alt={subject} width={35} height={35} />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold">{name}</p>
              <div
                className={`
                  subject-badge
                  max-sm:hidden
                `}
              >
                {subject}
              </div>
            </div>
            <p className="text-lg">{topic}</p>
          </div>
        </div>
        <div
          className={`
            items-start text-2xl
            max-md:hidden
          `}
        >
          {duration} minutes
        </div>
      </article>
      <Companion {...companion} companionId={id} userName={user.firstName!} userImage={user.imageUrl!} />
    </main>
  );
};

export default Page;
