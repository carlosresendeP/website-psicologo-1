# Landing Page para Psicólogo - Template 1

Uma landing page moderna e responsiva desenvolvida especificamente para psicólogos, utilizando HTML semântico, CSS3, JavaScript e Bootstrap 5.

## 🎯 Características

### 📱 Totalmente Responsivo
- Design mobile-first
- Compatível com todos os dispositivos
- Layout fluido e adaptável

### 🎨 Design Moderno
- Interface limpa e profissional
- Cores suaves e acolhedoras
- Animações suaves com ScrollReveal
- Efeitos hover interativos

### 📋 6 Seções Principais

1. **Hero/Início** - Apresentação principal com call-to-action
2. **Sobre** - Informações profissionais e credenciais
3. **Serviços** - Modalidades de atendimento oferecidas
4. **Depoimentos** - Feedback de pacientes
5. **Contato** - Formulário e informações de contato
6. **Footer** - Informações adicionais e links

### 🛠 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna com Flexbox e Grid
- **JavaScript ES6+** - Interatividade e funcionalidades
- **Bootstrap 5.3** - Framework CSS responsivo
- **ScrollReveal** - Animações de rolagem
- **Font Awesome** - Ícones vetoriais
- **Google Fonts** - Tipografia (Poppins)

## 🚀 Como Usar

### 1. Estrutura dos Arquivos
```
template-1/
├── index.html          # Página principal
├── css/
│   └── style.css      # Estilos personalizados
├── js/
│   └── script.js      # JavaScript personalizado
└── README.md          # Este arquivo
```

### 2. Instalação
1. Faça o download ou clone dos arquivos
2. Abra o arquivo `index.html` em um navegador
3. Ou utilize um servidor local (recomendado)

### 3. Servidor Local (Opcional)
```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (http-server)
npx http-server

# Com PHP
php -S localhost:8000
```

## ⚙️ Personalização

### 🎨 Cores
Edite as variáveis CSS no arquivo `css/style.css`:

```css
:root {
    --primary-color: #4A90E2;    /* Azul principal */
    --secondary-color: #5CB3CC;  /* Azul secundário */
    --accent-color: #FFA726;     /* Laranja de destaque */
    --dark-color: #2C3E50;       /* Cinza escuro */
    --light-gray: #F8F9FA;       /* Cinza claro */
}
```

### 📝 Conteúdo
Edite o arquivo `index.html` para personalizar:

- **Nome do psicólogo** - Altere "Dr. Marina Silva"
- **Especialidades** - Modifique as seções de serviços
- **Informações de contato** - Atualize telefone, e-mail e endereço
- **Depoimentos** - Substitua pelos depoimentos reais
- **Imagens** - Troque as URLs das imagens do Unsplash

### 📱 Informações de Contato
No arquivo `index.html`, localize e altere:

```html
<!-- Telefone -->
<span>(11) 99999-9999</span>

<!-- E-mail -->
<span>contato@marinasilva.psi.br</span>

<!-- Endereço -->
<span>Rua das Flores, 123 - Vila Madalena, São Paulo - SP</span>

<!-- CRP -->
<span>CRP: 06/123456</span>
```

### 🖼️ Imagens
Substitua as URLs das imagens por suas próprias fotos:

```html
<!-- Imagem principal do hero -->
<img src="SUA_IMAGEM_AQUI" alt="Psicóloga">

<!-- Foto do sobre -->
<img src="SUA_FOTO_PROFISSIONAL" alt="Dr. Seu Nome">

<!-- Fotos dos depoimentos -->
<img src="FOTO_PACIENTE_1" alt="Nome do Paciente">
```

## 🔧 Funcionalidades JavaScript

### 📜 ScrollReveal
Animações automáticas ao rolar a página:
- Elementos aparecem suavemente
- Efeitos de entrada personalizados
- Performance otimizada

### 🧭 Navegação Suave
- Links da navbar com rolagem suave
- Destaque automático da seção ativa
- Menu mobile responsivo

### 📧 Formulário de Contato
- Validação em tempo real
- Feedback visual (sucesso/erro)
- Prevenção de envio inválido
- Mensagens de notificação

### 🔝 Botão "Voltar ao Topo"
- Aparece após rolar a página
- Animação suave de retorno
- Design moderno e discreto

## 🎯 SEO e Performance

### 📈 Otimizações Incluídas
- **Meta tags** apropriadas
- **Estrutura semântica** HTML5
- **Imagens otimizadas** com lazy loading
- **Código minificado** (produção)
- **Compatibilidade** cross-browser

### 🔍 Meta Tags Sugeridas
Adicione no `<head>` do HTML:

```html
<meta name="description" content="Dr. Marina Silva - Psicóloga especializada em TCC. Atendimento presencial e online para adultos e adolescentes.">
<meta name="keywords" content="psicólogo, terapia, TCC, consulta online, saúde mental">
<meta name="author" content="Dr. Marina Silva">

<!-- Open Graph (Facebook) -->
<meta property="og:title" content="Dr. Marina Silva - Psicóloga Clínica">
<meta property="og:description" content="Especialista em Terapia Cognitivo-Comportamental">
<meta property="og:image" content="URL_DA_SUA_IMAGEM">
<meta property="og:url" content="URL_DO_SEU_SITE">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Dr. Marina Silva - Psicóloga">
<meta name="twitter:description" content="Cuidando da sua saúde mental">
```

## 📱 Integrações Disponíveis

### 💬 WhatsApp
Descomente a linha no `script.js` para ativar:
```javascript
initWhatsApp(); // Remove o comentário para ativar
```

### 📊 Google Analytics
Adicione seu tracking ID no `script.js`:
```javascript
gtag('config', 'SEU_GA_ID');
```

### 📈 Facebook Pixel
Configure no `script.js`:
```javascript
fbq('init', 'SEU_PIXEL_ID');
```

## 🔧 Suporte e Compatibilidade

### 🌐 Navegadores Suportados
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers

### 📱 Dispositivos Testados
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## 🚀 Deploy

### 🌐 Hospedagem Gratuita
- **Netlify** - Deploy automático via Git
- **Vercel** - Ideal para sites estáticos
- **GitHub Pages** - Gratuito para repositórios públicos
- **Firebase Hosting** - Rápido e confiável

### 📁 Preparação para Deploy
1. Otimize as imagens
2. Minifique CSS/JS (opcional)
3. Teste em diferentes dispositivos
4. Configure domínio personalizado

## 📞 Suporte

Para dúvidas ou suporte técnico:
- 📧 E-mail: suporte@exemplo.com
- 💬 WhatsApp: (11) 99999-9999

## 📄 Licença

Este template é fornecido "como está" para uso educacional e comercial.
Você é livre para modificar e usar conforme suas necessidades.

---

**Desenvolvido com ❤️ para profissionais da psicologia**

*Versão: 1.0*  
*Última atualização: Agosto 2024*
