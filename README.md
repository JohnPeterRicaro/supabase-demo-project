This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Sample Video
https://github.com/user-attachments/assets/e4d8509d-c6c6-4f47-8fc0-f0aca0d9097f

## Supabase

Go to `supabase.com/dashboard/projects` to start a project, you can add a project here, click the new project button and select your organization:
![image](https://github.com/user-attachments/assets/ebd4d8c6-59fd-4294-be4f-c6f64f506139)

Go to your `Project Settings` tab, there you can see Configuration -> API. To be able to connect your project to your code, you need to get your URL key and API Key(Anon key):
![image](https://github.com/user-attachments/assets/9e251744-5f23-4162-a521-33f0540d6b30)
You can create a `middleware.js/ts` so supabase automatically detects these keys or you can call it whenever you need to use the keys.
note: these keys that I have have been censored to avoid misusage.

Once you have created a project, and supabase is done setting up your project, you should see this screen:
![image](https://github.com/user-attachments/assets/b3bf50a3-fe36-41f1-a5f5-782cba9e24b5)

You can create a table from the table editor or you can create a new table from the SQL Editor.

Table editor:
![image](https://github.com/user-attachments/assets/1c928017-c223-4033-a035-92403230645c)

SQL Editor:
![image](https://github.com/user-attachments/assets/c80890b2-2359-4451-8b0e-982fbba5ceec)

You can add functions to your database, on the database tab -> Database Management -> Functions:
![image](https://github.com/user-attachments/assets/b74b93e9-f402-484c-abc9-b7706424df6a)

You can use that function as a trigger, on the database tag -> Database Management ->  Triggers:
![image](https://github.com/user-attachments/assets/ee44e1cc-34b5-4451-a8e3-02ede6679168)
note: you can also use the SQL Editor to create functions or triggers, the auth schema, doesn't allow users to directly create triggers,
but you can bypass that using the sql editor:
![image](https://github.com/user-attachments/assets/8df8771e-b5d3-4529-b08f-b71bca54b22d)
the `insert on auth.users` points the trigger where the event is supposed to happen.

On `Authentication` tab, this is where the Users table under `auth.users` is.
Whenever we sign-up a user or sign in a user, this is where the data is coming from:
![image](https://github.com/user-attachments/assets/0f3f6fa2-a5e4-462b-ba67-93f065fed46d)

You can view this users table on the `Table` tab, change the schema to `auth` then select the users table:
![image](https://github.com/user-attachments/assets/962766a9-4017-44cb-a079-edaa4b0dd45f)

On the `Authentication` tab, you can also provide policies, Authentication -> Configuration -> Policies:
![image](https://github.com/user-attachments/assets/6c40ccd9-b8e2-4be5-b1f9-da0000f3b898)

Policies are the permissions of the users based on their selected roles:
![image](https://github.com/user-attachments/assets/dfe14e0b-4a02-414a-b2e5-6d4c743f2ffc)
note: you can also code the policies directly on the SQL Editor.

Policies is useful when it comes to storage, on the `Storage` tab, we can see the policies:
![image](https://github.com/user-attachments/assets/3b8804c4-12ce-44d2-a7dc-5a8e92544583)
You can allow certain users to store more than just their data(text based) like images, videos, and if you set it up on supabase, those users
will be putting/pulling their data on the storage.

On the `Reports` tab is where you can see your API, Storage, & Database health:
![image](https://github.com/user-attachments/assets/e8268d89-a3b5-4490-8c02-4cba7e004734)
Whether they're functioning properly based on analytics the `Reports` provided to you.



