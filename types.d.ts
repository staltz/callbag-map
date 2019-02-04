import { Source } from 'callbag';

export default function map<I, O>(
  f: (d: I) => O,
): (source: Source<I>) => Source<O>;
