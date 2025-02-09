import {createClient} from "@/utils/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();
  const session = await supabase.auth.getSession();
  const user = await supabase.auth.getUser();

  console.log(session);
  console.log(user);
  const email = user?.data.user?.email;

  return <div>
    <p>Dashboard page</p>
    <p>Logged in as: {email}</p>
  </div>;
};