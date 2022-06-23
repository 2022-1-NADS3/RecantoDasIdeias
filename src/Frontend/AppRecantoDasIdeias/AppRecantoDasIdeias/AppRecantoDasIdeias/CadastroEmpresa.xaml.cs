using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace AppRecantoDasIdeias
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class CadastroEmpresa : ContentPage
    {
        public CadastroEmpresa()
        {
            InitializeComponent();
        }

        private async void Proxima_pagina2(object sender, EventArgs e)
        {
            await Navigation.PushAsync(new HomeRecanto());
        }
    }
}