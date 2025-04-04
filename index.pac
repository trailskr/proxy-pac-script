const domainsStr = `
googlevideo.com
youtube.com
rutracker.org
rutracker.cc
medium.com
devexpress.com
turbowarp.org
grok.com
x.ai
anthropic.com
t3.chat
openai.com
stripe.com
chatgpt.com
recraft.ai
groq.com
eslint.org
typescript-eslint.io
reka-ui.com
nuxt.com
ai.google.dev
aistudio.google.com
reddit.com
`

const domains = domainsStr.split('\n').filter(Boolean)

function match(host, domains) {
  return domains.some((domain) => {
    return dnsDomainIs(host, domain)
  })
}

function FindProxyForURL(_url, host) {
  return match(host, domains)
    ? 'SOCKS5 127.0.0.1:2080'
    : 'DIRECT'
}
