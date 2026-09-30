<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Serve the uploaded Cliqx opening video and its poster through Lovable Assets pointers, not repository binaries, to keep media delivery lightweight.
- Keep the solutions dial in a client-side component with local state; its editorial transitions and touch navigation do not require persistence.
- Drive the solutions dial from the scroll position of its tall section and keep its content in a sticky viewport panel; this lets scrolling, touch, and direct selection share one active step without persistence.
- Keep the Projeto Conceito reveal in a client-side section component: desktop scroll progress and small-screen item visibility control its five steps without persistence.
