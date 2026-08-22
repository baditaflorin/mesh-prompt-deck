import { useState } from "react";
import { useSharedPromptDeck } from "@baditaflorin/mesh-common";
import type { MeshConfig, YRoom } from "@baditaflorin/mesh-common";

type Props = { room: YRoom | null; config: MeshConfig };
export function Feature({ room, config }: Props) {
  const deck = useSharedPromptDeck(room, "conversation-deck"); const [text, setText] = useState("");
  const add = () => { if (deck.add({ id: `${room?.peerId ?? "local"}-${Date.now()}`, text })) setText(""); };
  return <main className="feature-placeholder"><h1>{config.appName}</h1><p>{config.description}</p><p className="feature-status" aria-live="polite">Current prompt: {deck.current?.text ?? "Choose a card"}</p><label>New prompt <input value={text} maxLength={280} onChange={(event) => setText(event.target.value)} /></label><button type="button" onClick={add}>Add prompt</button><ul>{deck.prompts.map((prompt) => <li key={prompt.id}><button type="button" aria-pressed={deck.current?.id === prompt.id} onClick={() => deck.select(prompt.id)}>{prompt.text}</button><button type="button" aria-label={`Remove ${prompt.text}`} onClick={() => deck.remove(prompt.id)}>Remove</button></li>)}</ul></main>;
}
