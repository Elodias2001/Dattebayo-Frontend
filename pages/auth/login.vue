<template>
  <div class="flex h-screen items-center justify-center">
    <div
      class="w-full max-w-[380px] border border-border/60 bg-card px-8 py-5 shadow-sm dark:border-border min-[480px]:rounded-lg"
    >
      <h1 class="text-2xl font-bold tracking-tight lg:text-3xl">Se connecter</h1>
      <p class="mt-1 text-muted-foreground">Entrez votre email & votre mot de passe</p>

      <form class="mt-10" @submit="submit">
        <fieldset :disabled="isSubmitting" class="grid gap-5">
          <div>
            <UiVeeInput label="Email" type="email" name="email" placeholder="john@example.com" />
          </div>
          <div>
            <UiVeeInput label="Password" type="password" name="password" />
          </div>
          <div>
            <UiButton class="w-full" type="submit" text="Log in" />
          </div>
        </fieldset>
      </form>
      <p class="mt-8 text-sm">
        <NuxtLink class="font-semibold text-primary underline-offset-2 hover:underline" to="#"
          >Forgot password?</NuxtLink
        >
      </p>
      <p class="mt-4 text-sm text-muted-foreground">
        Don't have an account?
        <NuxtLink class="font-semibold text-primary underline-offset-2 hover:underline" to="#"
          >Create account</NuxtLink
        >
      </p>
    </div>
  </div>
  <Notivue v-slot="item">
    <Notification :item="item">
      <NotificationProgress :item="item" />
    </Notification>
  </Notivue>
</template>

<script setup>
  import { object, string } from "yup";

  useSeoMeta({
    title: "Se Connecter",
    description: "Entrez votre email & votre mot de passe",
  });

  const LoginSchema = object({
    email: string()
      .email()
      .required()
      .label("Email")
      .matches(/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim, {
        message: "Adresse email invalide",
      }),
    password: string().required().label("Password").min(8),
  });

  const { handleSubmit, isSubmitting } = useForm({
    validationSchema: LoginSchema,
  });

  const submit = handleSubmit(async (_) => {
    // useSonner("Connexion établie avec succès !", {
    //   description: "Connexion établie avec succès !",
    // });
    push.success({
      title: "Connexion",
      message: "Connexion établie avec succès !",
      props: {
        name: "Maria",
        lastName: "Rossi",
      },
    });
  });
</script>
