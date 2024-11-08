const FORM_ID = '1FAIpQLSeCHXRpYTC4hatUyFJWsZl_klLDTXECcSkw7k7uME1-hyF-qg'
const FIELDS = {
  name: 'entry.595134308',
  company: 'entry.1102963244',
  email: 'entry.524960285',
  tel: 'entry.453187392',
  content: 'entry.1308299496',
} as Record<string, string>

export async function sendForm(data: FormData): Promise<'done' | 'error'> {
  const body = (Array.from(data.entries()) as Array<[string, string | number]>)
    .flatMap(
      ([name, value]) => `${FIELDS[name] ?? name}=${encodeURIComponent(value)}`
    )
    .join('&')

  try {
    return await fetch(
      `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`,
      {
        method: 'POST',
        mode: 'no-cors',
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded',
        }),
        body,
      }
    ).then(res => 'done')
  } catch (e) {
    console.error(e)
    return 'error'
  }
}
