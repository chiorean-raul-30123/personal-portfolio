type FrameSubscriber = (time: number) => void;

const subscribers = new Set<FrameSubscriber>();
let frame = 0;

function tick(time: number) {
  subscribers.forEach((subscriber) => subscriber(time));
  if (subscribers.size > 0) frame = window.requestAnimationFrame(tick);
  else frame = 0;
}

export function subscribeToFrame(subscriber: FrameSubscriber) {
  subscribers.add(subscriber);
  if (!frame) frame = window.requestAnimationFrame(tick);
  return () => {
    subscribers.delete(subscriber);
    if (subscribers.size === 0 && frame) {
      window.cancelAnimationFrame(frame);
      frame = 0;
    }
  };
}
