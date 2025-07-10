import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Radio } from "lucide-react";

import { QuestionForm } from "@/components/pages/room/question/form";
import { QuestionList } from "@/components/pages/room/question/list";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/room/$id/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();

  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <Link to="/">
              <Button variant="outline">
                <ArrowLeft className="mr-2 size-4" />
                Voltar ao Início
              </Button>
            </Link>
            <Link params={{ id }} to={"/room/$id/audio"}>
              <Button className="flex items-center gap-2" variant="secondary">
                <Radio className="size-4" />
                Gravar Áudio
              </Button>
            </Link>
          </div>
          <h1 className="mb-2 font-bold text-3xl text-foreground">Sala de Perguntas</h1>
          <p className="text-muted-foreground">Faça perguntas e receba respostas com IA</p>
        </div>

        <div className="mb-8">
          <QuestionForm roomId={id} />
        </div>

        <QuestionList roomId={id} />
      </div>
    </div>
  );
}
